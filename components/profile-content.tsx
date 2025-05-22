"use client"
import { MessageCircle, ImageIcon, Film } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BlurredImage } from "@/components/blurred-image"
import { BlurredVideo } from "@/components/blurred-video"
import { ChatPreview } from "@/components/chat-preview"

// Configuração centralizada - fácil de editar
const CONTENT_CONFIG = {
  photos: [
    {
      id: "photo1",
      src: "https://iili.io/3Z5kOGe.jpg",
      title: "Conteúdo exclusivo 1",
      blurAmount: 10,
    },
    {
      id: "photo2",
      src: "https://iili.io/3Z51VWl.md.jpg",
      title: "Conteúdo exclusivo 2",
      blurAmount: 8,
    },
    {
      id: "photo3",
      src: "https://iili.io/3Z5SI3u.md.jpg",
      title: "Conteúdo exclusivo 3",
      blurAmount: 12,
    },
  ],
  videos: [
    {
      id: "video1",
      thumbnail: "/images/video-thumb1.jpg",
      title: "Vídeo exclusivo 1",
      duration: "03:24",
      blurAmount: 10,
    },
    {
      id: "video2",
      thumbnail: "/images/video-thumb2.jpg",
      title: "Vídeo exclusivo 2",
      duration: "05:12",
      blurAmount: 8,
    },
    {
      id: "video3",
      thumbnail: "/images/video-thumb3.jpg",
      title: "Vídeo exclusivo 3",
      duration: "02:45",
      blurAmount: 12,
    },
  ],
}

export default function ProfileContent() {
  const { photos, videos } = CONTENT_CONFIG

  return (
    <div>
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-800/50">
          <TabsTrigger
            value="photos"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-red-500 flex items-center gap-2"
          >
            <ImageIcon className="h-4 w-4" />
            FOTOS
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-red-500 flex items-center gap-2"
          >
            <Film className="h-4 w-4" />
            VIDEOS
          </TabsTrigger>
          <TabsTrigger
            value="chat"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-red-500 flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            CHAT
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-6">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
            Prévia do conteúdo exclusivo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <BlurredImage key={photo.id} src={photo.src} alt={photo.title} blurAmount={photo.blurAmount} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-medium transition-all duration-300"
            >
              ASSINAR PARA VER MAIS
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
            Vídeos exclusivos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <BlurredVideo
                key={video.id}
                thumbnail={video.thumbnail}
                duration={video.duration}
                title={video.title}
                blurAmount={video.blurAmount}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-medium transition-all duration-300"
            >
              ASSINAR PARA VER MAIS
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="chat" className="mt-6">
          <ChatPreview />
        </TabsContent>
      </Tabs>
    </div>
  )
}
