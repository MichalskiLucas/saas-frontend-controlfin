import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Category from "./pages/Category.tsx"
import Transaction from "./pages/Transaction.tsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  )
}