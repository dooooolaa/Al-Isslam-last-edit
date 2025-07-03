import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import FavoriteButton from '../challenges/components/FavoriteButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Profile = () => {
  const { currentUser, logout, updateProfile, updatePassword, deleteAccount } = useAuth();
  const { favorites, removeFavorite } = useFavorites();
  const [editNameOpen, setEditNameOpen] = useState(false);
  const [editPassOpen, setEditPassOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [newName, setNewName] = useState(currentUser?.displayName || '');
  const [newPass, setNewPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // تعديل الاسم
  const handleNameChange = async () => {
    setLoading(true);
    setError('');
    try {
      await updateProfile({ displayName: newName });
      setEditNameOpen(false);
    } catch (e) {
      setError('حدث خطأ أثناء التحديث');
    }
    setLoading(false);
  };
  // تعديل كلمة المرور
  const handlePassChange = async () => {
    setLoading(true);
    setError('');
    try {
      await updatePassword(newPass);
      setEditPassOpen(false);
    } catch (e) {
      setError('حدث خطأ أثناء تغيير كلمة المرور');
    }
    setLoading(false);
  };
  // حذف الحساب
  const handleDelete = async () => {
    setLoading(true);
    setError('');
    try {
      await deleteAccount();
    } catch (e) {
      setError('حدث خطأ أثناء حذف الحساب');
    }
    setLoading(false);
  };

  return (
    <Box maxWidth={600} mx="auto" my={6} p={3} className="bg-white dark:bg-[#23272f] rounded-2xl shadow-lg border-2 border-gold-400">
      <Typography variant="h5" fontWeight={700} mb={2} color="primary">الصفحة الشخصية</Typography>
      <Typography mb={1}><b>البريد الإلكتروني:</b> {currentUser?.email}</Typography>
      <Typography mb={1}><b>الاسم:</b> {currentUser?.displayName}</Typography>
      <Box my={2} display="flex" gap={2}>
        <Button variant="outlined" color="primary" onClick={() => setEditNameOpen(true)}>تعديل الاسم</Button>
        <Button variant="outlined" color="primary" onClick={() => setEditPassOpen(true)}>تغيير كلمة المرور</Button>
        <Button variant="contained" color="error" onClick={() => setDeleteOpen(true)}>حذف الحساب</Button>
        <Button variant="outlined" color="secondary" onClick={logout}>تسجيل الخروج</Button>
      </Box>
      {/* نافذة تعديل الاسم */}
      <Dialog open={editNameOpen} onClose={() => setEditNameOpen(false)}>
        <DialogTitle>تعديل الاسم</DialogTitle>
        <DialogContent>
          <TextField label="الاسم الجديد" value={newName} onChange={e => setNewName(e.target.value)} fullWidth autoFocus />
          {error && <Typography color="error">{error}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditNameOpen(false)}>إلغاء</Button>
          <Button onClick={handleNameChange} disabled={loading} variant="contained">حفظ</Button>
        </DialogActions>
      </Dialog>
      {/* نافذة تغيير كلمة المرور */}
      <Dialog open={editPassOpen} onClose={() => setEditPassOpen(false)}>
        <DialogTitle>تغيير كلمة المرور</DialogTitle>
        <DialogContent>
          <TextField label="كلمة المرور الجديدة" type="password" value={newPass} onChange={e => setNewPass(e.target.value)} fullWidth autoFocus />
          {error && <Typography color="error">{error}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditPassOpen(false)}>إلغاء</Button>
          <Button onClick={handlePassChange} disabled={loading} variant="contained">تغيير</Button>
        </DialogActions>
      </Dialog>
      {/* نافذة حذف الحساب */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>تأكيد حذف الحساب</DialogTitle>
        <DialogContent>
          <Typography color="error">هل أنت متأكد أنك تريد حذف حسابك نهائيًا؟ لا يمكن التراجع!</Typography>
          {error && <Typography color="error">{error}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>إلغاء</Button>
          <Button onClick={handleDelete} disabled={loading} variant="contained" color="error">حذف نهائي</Button>
        </DialogActions>
      </Dialog>
      {/* قسم المفضلة */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight={700} mb={2} color="primary">مفضلتي</Typography>
        {favorites.length === 0 ? (
          <Typography color="text.secondary">لا توجد عناصر في المفضلة بعد.</Typography>
        ) : (
          <Box display="grid" gap={2}>
            {favorites.map(fav => (
              <Box key={fav.type + '-' + fav.id} p={2} className="bg-gold-50 dark:bg-gray-900 rounded-lg flex items-center justify-between">
                <span>{fav.title || fav.question || fav.text || fav.name || fav.label || 'عنصر'}</span>
                <FavoriteButton type={fav.type} id={fav.id} item={fav} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Profile; 