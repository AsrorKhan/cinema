import { createSlice, PayloadAction } from '@reduxjs/toolkit';import { IPartners } from '../../models/partners';const initialState: IPartners = {    content: [],    totalElement: 0,    currentPage: 0,};const ExampleStore3 = createSlice({    name: 'partners',    initialState,    reducers: {        setPartners(state: IPartners, action: PayloadAction<IPartners>) {            state.content = action.payload.content;            state.totalElement = action.payload.totalElement;            state.currentPage = action.payload.currentPage;        },    },});export const { setPartners } = ExampleStore3.actions;export default ExampleStore3.reducer;