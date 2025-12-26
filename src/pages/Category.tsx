import DashboardLayout from "../components/DashboardLayout"
import TextField from "../components/TextField"
import { useState } from "react"
import { Pencil, Trash2 } from "lucide-react"

export default function Category() {
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [categories, setCategories] = useState<string[]>([])

  function handleSave() {
    if (!name.trim()) {
      setError("Nome da categoria é obrigatório")
      return
    }

    setCategories(prev => [...prev, name])
    setName("")
    setError("")
  }

  function handleDelete(index: number) {
    setCategories(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="bg-zinc-50 border border-zinc-800 rounded-xl p-6 max-w-lg space-y-4">
          <h1 className="text-2xl font-bold">Cadastrar Categoria</h1>

          <TextField
            label="Nome da Categoria"
            placeholder="Ex: Cartão de Crédito"
            value={name}
            onChange={e => setName(e.target.value)}
            error={error}
          />

          <button
            onClick={handleSave}
            className="bg-slate-600 hover:bg-slate-900 px-5 py-2 rounded-lg text-white"
          >
            Salvar
          </button>
        </div>

        <div className="bg-zinc-50 border border-zinc-800 rounded-xl p-6 max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Categorias cadastradas</h2>

          {categories.length === 0 && (
            <p className="text-zinc-400 text-sm">Nenhuma categoria cadastrada.</p>
          )}

          <ul className="space-y-2">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-zinc-800 rounded-lg px-4 py-2"
              >
                <span>{cat}</span>

                <div className="flex gap-3">
                  <button className="hover:text-indigo-400">
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="hover:text-red-400"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </DashboardLayout>
  )
}
