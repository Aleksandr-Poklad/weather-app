import { base, Theme } from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            flexBasis: 'calc(33% - 30px)',
            backgroundColor: theme.palette.primary.main,
            margin: '0 15px 30px 15px',
            padding: 20,
            borderRadius: 10,
            position: 'relative'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        },
        titleSpan: {
            paddingLeft: 10
        },
        iconWr: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        descrWr: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        deleteBtn: {
            position: 'absolute',
            right: 10,
            top: 10,
            fontWeight: 700,
            cursor: 'pointer',
            width: 15,
            height: 15,
            background: 'transparent'
        },
        deleteBtnSvg: {
            color: theme.palette.error.main,
        }
    };
};