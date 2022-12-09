import { VIEW_CHART_MODE } from "config/enum";
import { Diary } from "model/diary.model";
import { Exercise } from "model/exercise.model";
import { MealHistoryItem } from "model/meal.model";
import { Recommend } from "model/recomnend.model";
import { WeightChartInfo } from "model/weight.model";

/**
 * now at this time, temporate define all service in this file
 */

/**
 * get achievement percent rate
 * @param date
 * @returns percent
 */
export const getAchievementRate = async (date: number) => {
    // call api to get achievement percent
    // mock return percent : 75%;
    return 75;
};

/**
 * get weigth chart info
 * @param year
 */
export const getWeigthChartInfo = async (
    date: Date,
    mode: VIEW_CHART_MODE = VIEW_CHART_MODE.year
): Promise<WeightChartInfo[]> => {
    // call api to get weigth chart info
    // mock value
    return [
        { name: "6月", x: 30, y: 25 },
        { name: "7月", x: 25, y: 20 },
        { name: "8月", x: 20, y: 18 },
        { name: "9月", x: 18, y: 15 },
        { name: "10月", x: 15, y: 14 },
        { name: "11月", x: 15, y: 12 },
        { name: "12月", x: 18, y: 15 },
        { name: "1月", x: 15, y: 13 },
        { name: "2月", x: 11, y: 11 },
        { name: "3月", x: 10, y: 9 },
        { name: "4月", x: 9, y: 10 },
        { name: "5月", x: 10, y: 9 },
    ];
};

/**
 * get list meal history
 * @returns
 */
export const getMealHistory = async (): Promise<MealHistoryItem[]> => {
    // call api
    // mock value
    return [
        { img: "./img/m01.jpg", description: "05.21.Morning" },
        { img: "./img/l03.jpg", description: "05.21.Lunch" },
        { img: "./img/d02.jpg", description: "05.21.Dinner" },
        { img: "./img/l01.jpg", description: "05.21.Snack" },
        { img: "./img/m01.jpg", description: "05.21.Morning" },
        { img: "./img/l03.jpg", description: "05.21.Lunch" },
        { img: "./img/d02.jpg", description: "05.21.Dinner" },
        { img: "./img/l01.jpg", description: "05.21.Snack" },
    ];
};

/**
 * get list exercise data
 * @param date
 */
export const getExerciseData = async (date: Date): Promise<Exercise[]> => {
    // call api
    // mock value
    return [
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
        { content: "家事全般（立位・軽い）", energy: "26kcal", duration: "10 min" },
    ];
};

/**
 * get diary data
 * @param date
 * @returns
 */
export const getDiaryData = async (date: Date): Promise<Diary[]> => {
    // call api
    // mock data
    return new Array(8).fill(0).map((item) => {
        return {
            content:
                "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
            time: new Date().valueOf(),
        };
    });
};

/**
 * get recommend data in columnpage
 * @returns
 */
export const getRecommendData = async (): Promise<Recommend[]> => {
    return [
        {
            img: "./img/column-1.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/column-2.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/column-3.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/column-4.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/column-5.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/d01.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/column-7.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
        {
            img: "./img/column-8.jpg",
            time: Date.now(),
            description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["#魚料理", "#和食", "#DHA"],
        },
    ];
};
