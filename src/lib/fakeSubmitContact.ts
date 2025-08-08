export interface ContactFormData {
  name: string
  email: string
  phone?: string
  business: string
  url?: string
  message: string
}

export async function fakeSubmitContact(_data: ContactFormData) {
  void _data
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 800)
  })
}
