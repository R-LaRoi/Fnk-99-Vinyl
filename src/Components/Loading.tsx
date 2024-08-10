import "../Components/styles/loading.css"

interface LoadingProps {
title: string

}

export function Loading({title}: LoadingProps) {
  return (
    <section className="load-body ">
    <div className="text-3xl">{title}</div>
    </section>
  )
}
