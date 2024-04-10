import { Dropdown, DropdownButton } from "ant-design-vue";
import { computed, defineComponent, PropType } from "vue";
const CltDropdownButton = defineComponent({
  extends: DropdownButton,
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
      <DropdownButton {...defaultProps.value}>
        {{
          default: ctx.slots.default,
        }}
      </DropdownButton>
    );
  },
});

export { Dropdown as CltDropdown, CltDropdownButton };
