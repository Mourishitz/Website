export type WakatimeUserResponse = {
    data: {
        bio: string
        city: {
            id: string
            name: string
            ascii_name: string
            state: string
            country_code: string
            population: number
            timezone: string
            title: string
            country: string
            short_title: string
        }
        created_at: string
        display_name: string
        full_name: string
        wonderfuldev_username: string|null
        github_username: string|null
        human_readable_website: string|null
        id: string
        is_email_confirmed: boolean
        is_email_public: boolean
        is_hireable: boolean
        languages_used_public: boolean
        editors_used_public: boolean
        categories_used_public: boolean
        os_used_public: boolean
        linkedin_username: string|null
        logged_time_public: boolean
        photo: string
        photo_public: boolean
        profile_url: string
        profile_url_escaped: string
        public_email: string
        public_profile_time_range: string
        share_all_time_badge: boolean
        share_last_years_days: boolean
        twitter_username: string|null
        username: string
        website: string|null
    }
}