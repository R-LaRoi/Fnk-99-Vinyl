import ReactDOM from 'react-dom';
interface Props {
  title: string
}

export function ItemAddedModal({ title }: Props) {
  return ReactDOM.createPortal(
    <>

      <div className='fixed top-4 right-4 z-50'>
        <div className="add-modal rounded-sm shadow-xl p-4 w-72 h-64 flex items-center justify-center text-center">
          <p>Awesome! You added {title} to your cart.</p>
        </div>
      </div >
    </>,
    document.getElementById('addedmodal-root') ?? document.body

  )
}