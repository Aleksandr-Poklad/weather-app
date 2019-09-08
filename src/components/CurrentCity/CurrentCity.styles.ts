import {base, Theme} from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            backgroundColor: theme.palette.primary.main,
            margin: '0 15px 30px 15px',
            padding: 20,
            borderRadius: 10
        }
    }
};