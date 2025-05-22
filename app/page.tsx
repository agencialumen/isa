import ProfileHeader from "@/components/profile-header"
import ProfileContent from "@/components/profile-content"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <ProfileHeader />
        <ProfileContent />
      </div>
    </main>
  )
}
