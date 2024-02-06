import { SigninButton } from './SigninButton'

export function AppBar() {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-zinc-800 to-zinc-950 shadow">
      <SigninButton />
    </header>
  )
}
