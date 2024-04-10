import { Table, Input } from "ant-design-vue";
import { computed, defineComponent, PropType } from "vue";
export default defineComponent({
  //继承Input就没问题 而继承Table就不行
  // extends: Input,
  extends: Table,
  props: {
    /** 下拉菜单按钮点击事件 */
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
      default: undefined,
    },
    /** 防抖延迟时间 */
    delay: {
      type: Number,
      default: 200,
    },
  },
  setup(props, ctx) {
    const defaultProps = computed(() => {
      return Object.assign({}, props, {
        onClick: undefined,
        delay: undefined,
      });
    });
    return () => (
      <Table {...defaultProps.value}>
        {{
          default: ctx.slots.default,
        }}
      </Table>
    );
  },
});
