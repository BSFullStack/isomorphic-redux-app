/**
 * 通知类邮件模板
 */
export function sendMessage(metaData){
    const { title ,link } = metaData;
    return  `
        <h2 style='background:#222EFA'>${title}</h2>
        <p>直达号:${link}</p>

    `;

}
