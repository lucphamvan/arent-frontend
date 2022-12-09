import icon_memo from "assets/img/icon_memo.svg";
import icon_challenge from "assets/img/icon_challenge.svg";
import icon_info from "assets/img/icon_info.svg";

export interface MenuItem {
    iconUrl: string;
    text: string;
    to: string;
}

export const menu: MenuItem[] = [
    {
        iconUrl: icon_memo,
        text: "自分の記録",
        to: "/my-record",
    },
    {
        iconUrl: icon_challenge,
        text: "チャレンジ",
        to: "/challenge",
    },
    {
        iconUrl: icon_info,
        text: "お知らせ",
        to: "/news",
    },
];
