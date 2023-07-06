import postgres from 'postgres'

const connectionString = 'postgresql://postgres:cPkrpH2Zu26l64Gh@db.oghpknfxisfmryqkrdbb.supabase.co:5432/postgres'
const sql = postgres(connectionString)

export default sql