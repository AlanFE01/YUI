import { defineComponent, PropType, ExtractPropTypes } from "vue";

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'  // 设定默认颜色
  },
  icon: {
    type: String,
    default: 'sun'
  }
} as const
export type ButtonProps = ExtractPropTypes<typeof props>

export default defineComponent({
  name: "MyButton",
  props,
  setup(props: ButtonProps, { slots }) {
    return () => (

      <button
        class={`
          py-2
          px-4
          font-semibold
          rounded-lg
          shadow-md
          text-white
          bg-${props.color}-500
          hover:bg-${props.color}-700
          border-none
          cursor-pointer
          `}
      >
        { props.icon !== "" ? <i class={`i-carbon-${props.icon} mx-2 text-lg`}></i> : ""}
        {slots.default ? slots.default() : ''}
      </button>
    )
  }
});