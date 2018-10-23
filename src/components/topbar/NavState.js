export const SHOW_COL = 'showCol';
export const SHOW_UNC = 'showUnc';
export const NOT_SHOW = 'notShow';
export const TOP_COL = 'topCol';
export const TOP_UNC = 'topUnc';

const snMap = {
    showCol: { show: true, collapsed: true },
    showUnc: { show: true, collapsed: false },
    notShow: { show: false, collapsed: true },
    topCol: { show: true, collapsed: true },
    topUnc: { show: true, collapsed: false }
};

export const isTop = (condition) => {
    return condition.startsWith('top');
};

const funReduce = {
    showCol: (actions) => {
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
    showUnc: (actions) => {
        if (actions.toggle || actions.scrollDown) {
            return SHOW_COL;
        }
        if (actions.yZero) {
            return TOP_UNC;
        }
        return SHOW_UNC;
    },
    notShow: (actions) => {
        if (actions.scrollUp) {
            return SHOW_COL;
        }
        return NOT_SHOW;
    },
    topCol: (actions) => {
        if (actions.toggle) {
            return TOP_UNC;
        }
        if (!actions.yZero) {
            return NOT_SHOW;
        }
        return TOP_COL;
    },
    topUnc: (actions) => {
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
