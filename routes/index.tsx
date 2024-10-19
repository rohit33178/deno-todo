import Home from '../islands/Home.tsx';

export default function HomePage() {

  return (
    <div class="px-4 mx-auto">
      <div class="flex flex-col items-center justify-center">
        <div class="max-w-screen-md m-4 px-4 py-0 mx-auto bg-slate-500 flex items-center">
          <img
            class="my-4"
            src="/logo.svg"
            width="64"
            height="64"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Deno Todo App</h1>
        </div>
        <Home />
      </div>
    </div>
  );
}
