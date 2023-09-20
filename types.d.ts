type Photos = {
    'id': number,
    'description': string,
    'alt_description': string,
    'user': {
        'name': string,
    },
    'urls': {
        'small': string
    }
}

type Photo = {
    'id': number,
    'description': string,
    'created_at': string,
    'alt_description': string,
    'updated_at': string,
    'urls': {
        'full': string
    },
    'user': {
        'name': string,
        'bio': string,
        'links': {
            'html': string
        }
        'profile_image': {
            'medium': string
        },
        'total_likes': string,
        'total_photos': string,
        'total_collections': string,
    },
    'views': number,
    'downloads': number,
}

type SearchPhoto = {
    'results':[
        {
            'id': string,
            'description': string
        }
    ]
}