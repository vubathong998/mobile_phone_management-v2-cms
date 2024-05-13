/**
 * @param actions
 * actions: 'A' : Must have a
 * actions: ['A','B'] : Must have A and B
 * actions: [['A'],['B']] : Must have A or B
 * actions: [['A','C'],['B']] : Must have ( A and C ) or B
 * actions: [['A','C'],['B', 'D']] : Must have ( A and C ) or (B and D)
 * @returns A useful value.
 */
const hasPermission = ({
    permissions = [],
    actions = '',
}: {
    permissions: Array<string>;
    actions: string | Array<string | Array<string>>;
}) => {
    // let isAccessible: boolean = false;

    let acessible: {
        mustHave: boolean;
        mustOneOf: boolean;
    } = {
        mustHave: false,
        mustOneOf: false,
    };

    if (permissions) {
        if (typeof permissions === 'string') {
            permissions = [permissions];
        }
        permissions = permissions.map(el => el.toLowerCase());

        // To compare with And
        if (typeof actions !== 'string') {
            let stringActs: Array<string> = [];
            let arrActs: Array<Array<string>> = [];

            if (actions.length === 0) {
                acessible.mustHave = true;
                acessible.mustOneOf = true;
            } else {
                actions.forEach(action => {
                    if (typeof action === 'string') {
                        stringActs.push(action);
                    } else {
                        arrActs.push(action);
                    }
                });
                // check must have permission: true when permission have all stringActs
                if (stringActs.length > 0) {
                    acessible.mustHave = stringActs.every(i => permissions.includes(i.toLowerCase()));
                    // permissions.every(act => stringActs.includes(act));

                    // stringActs.forEach(e => {
                    //     if (permissions.includes(e.toLowerCase())) {
                    //         acessible.mustHave = true;
                    //     } else {
                    //         acessible.mustHave = false;
                    //     }
                    // });
                } else {
                    acessible.mustHave = true;
                }
                // check optional permissions [[a,b],[c,d]] : true when permisison have (a & b) || (c & d)
                if (arrActs.length > 0) {
                    arrActs.forEach((acts: Array<string>) => {
                        let allFounded = acts.every((per: string) => {
                            return permissions.includes(per.toLowerCase());
                        });

                        if (allFounded) {
                            acessible.mustOneOf = true;
                            return true;
                        }
                    });
                } else {
                    acessible.mustOneOf = true;
                }
            }
        } else {
            // isAccessible = Boolean(permissions.includes(actions.toLowerCase())) || actions.trim() === '';
            acessible.mustHave = Boolean(permissions.includes(actions.toLowerCase())) || actions.trim() === '';
            acessible.mustOneOf = Boolean(permissions.includes(actions.toLowerCase())) || actions.trim() === '';
        }
    }
    return acessible.mustHave && acessible.mustOneOf;
};
export default hasPermission;
