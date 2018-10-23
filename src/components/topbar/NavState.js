export const SHOW_COL = 'show_col';
export const SHOW_UNC = 'show_unc';
export const NOT_SHOW = 'not_show';
export const TOP_COL = 'top_col';
export const TOP_UNC = 'top_unc';

const snMap = {
    show_col: { show: true, collapsed: true },
    show_unc: { show: true, collapsed: false },
    not_show: { show: false, collapsed: true },
    top_col: { show: true, collapsed: true },
    top_unc: { show: true, collapsed: false }
};

export const isTop = (condition) => {
    return condition.startsWith('top');
};

const funReduce = {
    show_col: (actions) => {
        if (actions.toggle) {
            return SHOW_UNC;
        }
        if (actions.scrollDown) {
            return NOT_SHOW;
        }
        if (actions.yZero) {
            return TOP_COL;
        }
        return SHOW_COL;
    },
    show_unc: (actions) => {
        if (actions.toggle || actions.scrollDown) {
            return SHOW_COL;
        }
        if (actions.yZero) {
            return TOP_UNC;
        }
        return SHOW_UNC;
    },
    not_show: (actions) => {
        if (actions.scrollUp) {
            return SHOW_COL;
        }
        return NOT_SHOW;
    },
    top_col: (actions) => {
        if (actions.toggle) {
            return TOP_UNC;
        }
        if (!actions.yZero) {
            return NOT_SHOW;
        }
        return TOP_COL;
    },
    top_unc: (actions) => {
        if (actions.toggle) {
            return TOP_COL;
        }
        if (!actions.yZero) {
            return NOT_SHOW;
        }
        return TOP_UNC;
    }
};

export const reduce = (state, actions) => {
    if (!funReduce[state]) {
        return state;
    }

    return funReduce[state](actions);
};

export const stateToNav = (state) => {
    if (!snMap[state]) {
        throw new Error(`undefined state ${state}`);
    }
    return snMap[state];
};
