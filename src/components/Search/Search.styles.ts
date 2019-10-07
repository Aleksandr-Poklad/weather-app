import { base, Theme } from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 50
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            height: 40,
            minWidth: 320,
            borderRadius: '5px 0 0 5px',
            border: 'none',
            textIndent: 15
        },
        searchBtn: {
            height: 40,
            borderRadius: '0 5px 5px 0',
            border: 'none',
            minWidth: 120,
            color: '#fff',
            background: '#499b49',
            transition: 'background .3s',
            '&:hover': {
                cursor: 'pointer',
                background: '#279b16',
            },
        }
    };
};