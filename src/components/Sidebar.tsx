import { ChartColumnStacked, ArrowLeftRight, LogOut, House } from "lucide-react"
import { Link } from "react-router-dom"

export default function Sidebar() {
	return (
		<aside className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed">
			<div className="h-16 flex items-center justify-center text-xl font-bold border-b border-slate-700">
				ControlFin
			</div>

			<nav className="flex-1 px-4 py-6 space-y-2">
				<Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-900 transition">
					<House size={20} /> Home
				</Link>

				<Link to="/transaction" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-900 transition">
					<ArrowLeftRight size={20} /> Lançamentos
				</Link>

				<Link to="/category" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-900 transition">
					<ChartColumnStacked size={20} /> Categorias
				</Link>
			</nav>

			<div className="p-4 border-t border-slate-700">
				<button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-600 transition">
					<LogOut size={20} /> Logout
				</button>
			</div>
		</aside>
	);
}