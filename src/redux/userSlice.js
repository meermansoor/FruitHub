import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.fullName = ''
      state.isAuthenticated = false
    }
  }
})

export const { setFullName, clearUser } = userSlice.actions
export default userSlice.reducer
