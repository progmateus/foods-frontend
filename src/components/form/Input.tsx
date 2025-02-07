import { forwardRef, ForwardRefRenderFunction, HtmlHTMLAttributes, ReactNode } from "react"
import { twJoin } from "tailwind-merge"


type IProps = HtmlHTMLAttributes<HTMLInputElement> & {
  name: string;
  errorMessage?: string,
  label?: string,
  invalid?: boolean,
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IProps> = ({ name, errorMessage, label, rightIcon, leftIcon, invalid = false, ...rest }, ref) => {
  return (
    <>
      <div className="relative">
        {label && <label v-if="label" className="text-zinc-300 text-sm mb-2 block">{label}</label>}

        <div
          className={
            twJoin(
              'flex gap-2 w-full items-center px-4 py-2 border rounded-md bg-zinc-900 text-zinc-300 focus:outline-none focus:ring-2 focus:zinc-600 transition placeholder:text-zinc-500',
              [errorMessage ? 'border-red-500' : 'border-zinc-600'],
              !errorMessage && 'focus:zinc-500',
              errorMessage && 'focus:ring-red-500'
            )
          }>

          {rightIcon && rightIcon}
          <input
            name={name}
            ref={ref}
            aria-invalid={invalid}

            {...rest}
            className="w-full bg-transparent outline-none placeholder:text-zinc-500"
          />

          {leftIcon && leftIcon}
        </div>
        {
          errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        }


      </div >
    </>
  )
}
export const Input = forwardRef(InputBase);