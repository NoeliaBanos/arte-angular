export interface Iartwork {
    id: number;
    title: string;
    artist_display: string | null;
    date_display: string | null;
    main_reference_number: string | null;
    artist_id: number;
    classification_titles: string[];
    style_ids: string[];
    image_id: string;
    imageUrl: string;
    is_public_domain: boolean;
    [key: string]: any;
}
