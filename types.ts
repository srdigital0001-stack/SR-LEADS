
export interface LeadFormData {
  name: string;
  phone: string;
  area: string;
  budget: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
