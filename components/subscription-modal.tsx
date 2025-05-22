"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { motion } from "framer-motion"

// Configuração centralizada dos planos - fácil de editar
const SUBSCRIPTION_PLANS = [
  {
    id: "basic",
    title: "Plano Básico",
    price: "R$19,90",
    popular: false,
    imageSrc: "https://iili.io/3ZTyBXs.jpg", // Exemplo de imagem externa
    features: [
      "Acesso a conteúdo exclusivo",
      "Mensagens diretas limitadas",
      "Atualizações semanais",
      "Cancele a qualquer momento",
    ],
    buttonText: "ASSINAR BÁSICO",
    buttonColor: "bg-zinc-700 hover:bg-zinc-600",
  },
  {
    id: "premium",
    title: "Plano Premium",
    price: "R$29,90",
    popular: true,
    imageSrc: "/images/plan-premium.jpg", // Imagem local
    features: [
      "Tudo do plano Básico",
      "Mensagens diretas ilimitadas",
      "Conteúdo em alta resolução",
      "Atualizações diárias",
      "Prioridade no atendimento",
    ],
    buttonText: "ASSINAR PREMIUM",
    buttonColor: "bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600",
  },
  {
    id: "diamond",
    title: "Plano Diamante",
    price: "R$99,90",
    popular: false,
    imageSrc: "/images/plan-diamond.jpg", // Imagem local
    features: [
      "Tudo do plano Premium",
      "Conteúdo exclusivo em 4K",
      "Acesso antecipado a novidades",
      "Chamadas de vídeo exclusivas",
      "Benefícios personalizados",
      "Suporte prioritário 24/7",
    ],
    buttonText: "ASSINAR DIAMANTE",
    buttonColor: "bg-zinc-700 hover:bg-zinc-600",
  },
]

// Componente de card de assinatura
const SubscriptionCard = ({ plan }) => {
  const { id, title, price, popular, imageSrc, features, buttonText, buttonColor } = plan

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-zinc-900 border ${popular ? "border-rose-500" : "border-zinc-800"} rounded-xl overflow-hidden flex flex-col relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium z-10">
          POPULAR
        </div>
      )}

      <div className="relative">
        <div className="aspect-[16/9] w-full relative overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent"></div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-white leading-tight">{price}</p>
            <p className="text-zinc-400 text-xs leading-tight">por mês</p>
          </div>
        </div>

        <ul className="mb-4 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 mb-2 text-sm">
              <span className="text-rose-500 font-bold">✓</span>
              <span className="text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-3 rounded-lg ${buttonColor} text-white font-medium transition-all duration-300`}>
          {buttonText}
        </button>
      </div>
    </motion.div>
  )
}

interface SubscriptionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SubscriptionModal({ open, onOpenChange }: SubscriptionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 p-0 sm:max-w-md md:max-w-3xl w-[95%] mx-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent text-center">
            Escolha seu plano de assinatura
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-center text-sm mb-4">
            Acesse conteúdo exclusivo com um dos nossos planos. Quanto mais premium o plano, mais benefícios você terá.
          </p>

          {/* Layout responsivo para dispositivos móveis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <SubscriptionCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
