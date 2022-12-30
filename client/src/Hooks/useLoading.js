function useLoading(loading, Component) {
    if (loading) return (< div className="text-center"><img src="images/loading.gif" alt="loading"></img></div>)
    else return Component;
}

export default useLoading;