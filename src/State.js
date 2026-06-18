import { create } from 'zustand';

const useStore = create((set) => ({
    category: '',
    endpoint: null,
    display: false,
    section: '',
    movies: false,
    tvshows: false,
    newandpopular: false,
    page: 1,
    loading: false,
    setCategory: (category) => set({ category }),
    setEndpoint: (endpoint) => set({ endpoint }),
    setDisplay: (display) => set({ display }),
    setSection: (section) => set({ section}),
    setMovies: (movies) => set({ movies }),
    setTvshows: (tvshows) => set({ tvshows }),
    setNewandpopular: (newandpopular) => set({ newandpopular }),
    setPage: (page) => set({ page }),
    setLoading: (loading) => set({ loading })

}))

export default useStore;