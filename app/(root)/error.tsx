// Heyyy future me
// Just so you know you got this code sniper from https://nextjs.org/docs/app/api-reference/file-conventions/error#error

'use client' // Error boundaries must be Client Components
 
export default function Error({
//   error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}