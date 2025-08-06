import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Đăng nhập</h2>
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
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Đăng nhập
      </button>
    </form>
  );
}
