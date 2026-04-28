const db = require("../config/db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// 📧 Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "venuvk8368@gmail.com",
    pass: "zkcz npdr jhiw gecx"
  }

  // auth: {
//   user: "YOUR_EMAIL@gmail.com",
//   pass: "YOUR_REAL_APP_PASSWORD" // 👈 real app password
// }
});


// auth: {
//   user: "venuvk8368@gmail.com",
//   pass: "abcd efgh ijkl mnop" // 👈 real app password
// }

// ✅ REGISTER
// exports.register = async (req, res) => {
//   const { name, email, mobile, password } = req.body;

//   try {
//     const hashed = await bcrypt.hash(password, 10);

//     db.query(
//       "INSERT INTO users (name,email,mobile,password) VALUES (?,?,?,?)",
//       [name, mobile,email, hashed],
//       (err) => {
//         if (err) return res.json({ success: false, message: err.message });

//         res.json({ success: true });
//       }
//     );
//   } catch (err) {
//     res.json({ success: false });
//   }
// };


exports.register = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.json({ success: false, message: "All fields required" });
  }

  try {
    // check existing user
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) {
        return res.json({ success: false, message: err.message });
      }

      if (result.length > 0) {
        return res.json({ success: false, message: "Email already exists" });
      }

      const hashed = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO users (name,email,mobile,password) VALUES (?,?,?,?)",
        [name, email, mobile, hashed],
        (err) => {
          if (err) {
            return res.json({ success: false, message: err.message });
          }

          res.json({ success: true, message: "Registered Successfully" });
        }
      );
    });

  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// ✅ LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (result.length === 0)
        return res.json({ success: false, message: "User not found" });

      const user = result[0];

      const match = await bcrypt.compare(password, user.password);

      if (!match)
        return res.json({ success: false, message: "Wrong password" });

      res.json({ success: true });
    }
  );
};

// ✅ SEND OTP
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("API HIT /send-otp");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp);

    const expiry = new Date(Date.now() + 5 * 60 * 1000);

    // ✅ DB insert with error handling
    db.query(
      "INSERT INTO otp_codes (email, otp, expires_at) VALUES (?,?,?)",
      [email, otp, expiry],
      async (dbErr) => {
        if (dbErr) {
          console.log("DB Error:", dbErr);
          return res.json({ success: false, message: "DB error" });
        }

        // ✅ Send mail
        transporter.sendMail({
          from: "venuvk8368@gmail.com",
          to: email,
          subject: "OTP Verification",
          text: `Your OTP is ${otp}`
        }, (mailErr, info) => {
          if (mailErr) {
            console.log("Mail Error:", mailErr);
            return res.json({ success: false, message: "Email failed" });
          }

          console.log("Email sent:", info.response);
          return res.json({ success: true });
        });
      }
    );

  } catch (err) {
    console.log("Server Crash Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ VERIFY OTP
exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  db.query(
    "SELECT * FROM otp_codes WHERE email=? AND otp=?",
    [email, otp],
    (err, result) => {
      if (result.length === 0)
        return res.json({ success: false, message: "Invalid OTP" });

      res.json({ success: true });
    }
  );
};

// ✅ RESET PASSWORD
exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "UPDATE users SET password=? WHERE email=?",
    [hashed, email],
    (err) => {
      if (err) return res.json({ success: false });

      res.json({ success: true });
    }
  );
};



// SEND MOBILE OTP
exports.sendOtpMobile = (req, res) => {
  const { mobile } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const expiry = new Date(Date.now() + 5 * 60 * 1000);

  db.query(
    "INSERT INTO otp_codes (email, otp, expires_at) VALUES (?,?,?)",
    [mobile, otp, expiry]
  );

  console.log("Mobile OTP:", otp); // testing

  res.json({ success: true });
};



exports.verifyOtpMobile = (req, res) => {
  const { mobile, otp } = req.body;

  db.query(
    "SELECT * FROM otp_codes WHERE email=? AND otp=?",
    [mobile, otp],
    (err, result) => {
      if (err) {
        return res.json({ success: false, message: err.message });
      }

      if (result.length === 0) {
        return res.json({ success: false, message: "Invalid OTP" });
      }

      res.json({ success: true });
    }
  );
};