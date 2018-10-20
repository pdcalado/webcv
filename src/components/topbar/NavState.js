export const SHOW_COL = 'show_col';
export const SHOW_UNC = 'show_unc';
export const NOT_SHOW = 'not_show';
export const TOP_COL = 'top_col';
export const TOP_UNC = 'top_unc';

export const isTop = (condition) => {
    return condition.startsWith('top');
};

export const reduce = (state, actions) => {
    switch (state) {
        case SHOW_COL:
            if (actions.toggle) return SHOW_UNC;
            if (actions.scrollDown) return NOT_SHOW;
            if (actions.yZero) return TOP_COL;
            break;
        case SHOW_UNC:
            if (actions.toggle || actions.scrollDown) return SHOW_COL;
            if (actions.yZero) return TOP_UNC;
            break;
        case NOT_SHOW:
            if (actions.scrollUp) return SHOW_COL;
            break;
        case TOP_COL:
            if (actions.toggle) return TOP_UNC;
            if (!actions.yZero) return NOT_SHOW;
            break;
        case TOP_UNC:
            if (actions.toggle) return TOP_COL;
            if (!actions.yZero) return NOT_SHOW;
            break;
        default:
            break;
    }

    return state;
};

export const stateToNav = (state) => {
    switch (state) {
        case SHOW_COL:
            return { show: true, collapsed: true };
        case SHOW_UNC:
            return { show: true, collapsed: false };
        case NOT_SHOW:
            return { show: false, collapsed: true };
        case TOP_COL:
            return { show: true, collapsed: true };
        case TOP_UNC:
            return { show: true, collapsed: false };
        default:
            throw new Error(`undefined state ${state}`);
    }
};
