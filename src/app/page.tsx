import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <main className="p-24">
      <h2 className="text-2xl font-medium">Hello shadcn/ui!</h2>
      <p className="py-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magni
        repellat, dolor sapiente fuga animi sint quas ad beatae vel quisquam
        vitae sunt velit natus cum eaque sed unde voluptatibus nemo. Consequatur
        sunt ullam amet quam adipisci omnis expedita nobis perspiciatis,
        possimus neque necessitatibus, autem dolore iusto voluptate mollitia ea.
      </p>
      <div className="flex items-center gap-4">
        <Button>Click Here</Button>
        <Button>Click Here</Button>
      </div>
    </main>
  )
}

export default Home
