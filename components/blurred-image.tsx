"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface BlurredImageProps {
  src: string
  alt: string
  blurAmount: number
}

export function BlurredImage({ src, alt, blurAmount = 10 }: BlurredImageProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          style={{
            filter: `blur(${blurAmount}px)`,
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-white font-medium">Conteúdo exclusivo</p>
        <p className="text-zinc-300 text-sm">Disponível para assinantes</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
          <p className="text-white text-sm">Assine para ver</p>
        </div>
      </div>
    </motion.div>
  )
}
