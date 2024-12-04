import { forwardRef } from "react"

const Dialog = forwardRef( (props, ref) => {
    const { handleCloseDialog, children } = props

    return (
        <dialog ref={ref} className='relative bg-neutral-50 drop-shadow backdrop:bg-neutral-400/60 rounded-md shadow-3xl'>
            <div className='absolute top-2 right-4 flex gap-4 justify-center'>
                <button title='close' onClick={handleCloseDialog}>
                    <span className="text-lg">🗙</span>
                </button>
            </div>
            <div className='flex flex-col gap-4 mt-12 min-w-[80vw] min-h-[80vh] bg-white'>
                {children}
            </div>
        </dialog>
    )

})

export default Dialog