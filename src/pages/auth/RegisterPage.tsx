import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Đăng ký</h2>
      <input
        name="fullname"
        type="text"
        placeholder="Họ tên"
        value={form.fullname}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Đăng ký
      </button>
    </form>
  );
}
