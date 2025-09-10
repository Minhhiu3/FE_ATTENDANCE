import { useState } from "react";
import { forgotPassword } from "../../common/services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      alert("Email khôi phục mật khẩu đã được gửi!");
    } catch (error) {
      console.error("Lỗi khi gửi email khôi phục mật khẩu:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Quên mật khẩu</h2>
      <input
        name="email"
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700">
        Gửi email khôi phục
      </button>
    </form>
  );
}
