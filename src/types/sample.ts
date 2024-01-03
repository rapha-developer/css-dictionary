export type Sample = {
    id: string
    attributes: {
        title: string
        description: string
        created_at: {
            date: string
            time: string
        }
    }
    display: {
        title: string
        description_pt: string
    }
    relationships: {
        id: string
        name: string
    }
}