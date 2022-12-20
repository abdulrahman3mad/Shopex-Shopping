function useConditionalRender(condition, Comp1, Comp2) {
    return (condition && Object.keys(condition).length) ? Comp1 : Comp2;
}

export default useConditionalRender;