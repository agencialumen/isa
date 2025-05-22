"use client"
import { Star, Share2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import SubscriptionModal from "@/components/subscription-modal"

// Configuração centralizada - fácil de editar
const PROFILE_CONFIG = {
  username: "Isabelle Lua",
  handle: "@Belinha.ofc",
  bio: "Bem-vindo ao meu mundo! Sou uma pessoa extraordinária e criativa. Estou sempre com energia positiva e pronta para compartilhar conteúdo exclusivo com você.",
  stats: {
    posts: "127",
    photos: "38",
    likes: "1.2K",
  },
  images: {
    avatar: "https://iili.io/3ZAmAap.md.jpg",
    cover: "https://iili.io/3ZTyBXs.jpg",
  },
}

export default function ProfileHeader() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const { username, handle, bio, stats, images } = PROFILE_CONFIG

  return (
    <>
      <div className="relative">
        <div className="h-48 sm:h-64 w-full relative overflow-hidden rounded-b-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-black/50 z-10" />
          <Image src={images.cover || "/placeholder.svg"} alt="Cover" fill className="object-cover" priority />
        </div>

        <div className="flex justify-between items-start px-4 md:px-0">
          <Link href="#" className="absolute top-4 left-4 z-20 text-white">
            <ArrowLeft className="h-6 w-6" />
          </Link>

          <div className="flex gap-2 absolute top-4 right-4 z-20">
            <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
              <Star className="h-5 w-5 text-white" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
              <Share2 className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 -mt-16 relative z-20 px-4 md:px-0">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-zinc-900 overflow-hidden shadow-xl">
            <Image src={images.avatar || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
          </div>

          <div className="flex-1 mt-4 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  {username}
                  <span className="bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                    VIP
                  </span>
                </h1>
                <p className="text-zinc-400 text-sm">{handle}</p>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <p className="font-bold">{stats.posts}</p>
                  <p className="text-zinc-400">Posts</p>
                </div>
                <div className="h-10 w-px bg-zinc-800"></div>
                <div className="text-center">
                  <p className="font-bold">{stats.photos}</p>
                  <p className="text-zinc-400">Fotos</p>
                </div>
                <div className="h-10 w-px bg-zinc-800"></div>
                <div className="text-center">
                  <p className="font-bold">{stats.likes}</p>
                  <p className="text-zinc-400">Likes</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-zinc-300 max-w-2xl">{bio}</p>

            <div className="mt-4">
              <Button
                onClick={() => setShowSubscriptionModal(true)}
                className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-medium transition-all duration-300"
              >
                ASSINAR PARA VER MAIS
              </Button>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-zinc-800 my-8"></div>
      </div>

      <SubscriptionModal open={showSubscriptionModal} onOpenChange={setShowSubscriptionModal} />
    </>
  )
}
