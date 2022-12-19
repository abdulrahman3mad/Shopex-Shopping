function useConditionalRender(condition, Comp1, Comp2) {
    return condition ? Comp1 : Comp2;
}

export default useConditionalRender;