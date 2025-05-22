"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type React from "react"
import Image from "next/image"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

// Basic Plan 3D Model
const BasicModel = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        <mesh ref={meshRef} castShadow receiveShadow>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshStandardMaterial
            color="#f87171"
            metalness={0.7}
            roughness={0.2}
            emissive="#ef4444"
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, -2, 0]}
          fontSize={0.5}
          color="white"
          font="/fonts/Inter_Bold.json"
          anchorX="center"
          anchorY="middle"
        >
          BÁSICO
        </Text>
      </group>
    </Float>
  )
}

// Premium Plan 3D Model
const PremiumModel = () => {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.4
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={group}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#f43f5e"
            metalness={0.8}
            roughness={0.1}
            emissive="#e11d48"
            emissiveIntensity={0.3}
          />
        </mesh>
        <Text
          position={[0, -2, 0]}
          fontSize={0.5}
          color="white"
          font="/fonts/Inter_Bold.json"
          anchorX="center"
          anchorY="middle"
        >
          PREMIUM
        </Text>
      </group>
    </Float>
  )
}

// Diamond Plan 3D Model
const DiamondModel = () => {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.5
      group.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={group}>
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#fcd34d"
            metalness={1}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.2}
          />
        </mesh>
        <Text
          position={[0, -2, 0]}
          fontSize={0.5}
          color="white"
          font="/fonts/Inter_Bold.json"
          anchorX="center"
          anchorY="middle"
        >
          DIAMANTE
        </Text>
      </group>
    </Float>
  )
}

// 3D Scene Component
const Scene = ({ children }: { children: React.ReactNode }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        {children}
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}

// Subscription card component
const SubscriptionCard = ({ title, price, features, buttonText, model, popular = false, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-zinc-800 border ${popular ? "border-rose-500" : "border-zinc-700"} rounded-xl overflow-hidden flex flex-col relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-bl-lg font-medium z-10">
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

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex justify-between items-end">
            <h3 className="text-base font-bold text-white">{title}</h3>
            <div className="text-right">
              <p className="text-xl font-bold text-white leading-tight">{price}</p>
              <p className="text-zinc-400 text-xs leading-tight">por mês</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <ul className="mb-2 flex-1 text-xs">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-1 mb-0.5">
              <span className="text-rose-500 font-bold">✓</span>
              <span className="text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-1.5 rounded-lg ${popular ? "bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600" : "bg-zinc-700 hover:bg-zinc-600"} text-white font-medium transition-all duration-300 text-xs`}
        >
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
      <DialogContent className="bg-zinc-900 border-zinc-800 p-0 max-w-3xl">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent text-center">
            Escolha seu plano de assinatura
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-center text-xs mb-3">
            Acesse conteúdo exclusivo com um dos nossos planos. Quanto mais premium o plano, mais benefícios você terá.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <SubscriptionCard
              title="Plano Básico"
              price="R$19,90"
              features={[
                "Acesso a conteúdo exclusivo",
                "Mensagens diretas limitadas",
                "Atualizações semanais",
                "Cancele a qualquer momento",
              ]}
              buttonText="ASSINAR BÁSICO"
              model={<BasicModel />}
              imageSrc="/images/plan-basic.jpg"
            />

            <SubscriptionCard
              title="Plano Premium"
              price="R$29,90"
              features={[
                "Tudo do plano Básico",
                "Mensagens diretas ilimitadas",
                "Conteúdo em alta resolução",
                "Atualizações diárias",
                "Prioridade no atendimento",
              ]}
              buttonText="ASSINAR PREMIUM"
              model={<PremiumModel />}
              popular={true}
              imageSrc="/images/plan-premium.jpg"
            />

            <SubscriptionCard
              title="Plano Diamante"
              price="R$99,90"
              features={[
                "Tudo do plano Premium",
                "Conteúdo exclusivo em 4K",
                "Acesso antecipado a novidades",
                "Chamadas de vídeo exclusivas",
                "Benefícios personalizados",
                "Suporte prioritário 24/7",
              ]}
              buttonText="ASSINAR DIAMANTE"
              model={<DiamondModel />}
              imageSrc="/images/plan-diamond.jpg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
