"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Lock } from "lucide-react"

interface BlurredVideoProps {
  thumbnail: string
  duration: string
  title: string
  blurAmount: number
}

export function BlurredVideo({ thumbnail, duration, title, blurAmount = 10 }: BlurredVideoProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video w-full">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          style={{
            filter: `blur(${blurAmount}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-red-500/10"></div>

        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          {duration}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full">
            <Lock className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-white font-medium">{title}</p>
        <p className="text-zinc-300 text-sm">Disponível para assinantes</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gradient-to-r from-rose-500 to-red-500 p-4 rounded-full">
          <Play className="h-8 w-8 text-white" fill="white" />
        </div>
      </div>
    </motion.div>
  )
}
