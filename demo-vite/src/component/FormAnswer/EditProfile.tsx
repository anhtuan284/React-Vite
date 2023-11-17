export default function EditProfile() {

    let firstName = 'Jane';
    let lastName = 'Jacobs';
    let isEditing = false;

    function handleFormSubmit(e: any) {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    function handleFirstNameChange(e: any) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: any) {
        setLastName(e.target.value);
    }

    function setFirstName(value: string) {
        firstName = value;
        updateDOM();
    }

    function setLastName(value: string) {
        lastName = value;
        updateDOM();
    }

    function setIsEditing(value: boolean) {
        isEditing = value;
        updateDOM();
    }

    function updateDOM() {
        if (editButton) {
            if (isEditing) {
            editButton.textContent = 'Save Profile';
            // TODO: show inputs, hide content
            } else {
            editButton.textContent = 'Edit Profile';
            // TODO: hide inputs, show content
            }
        }
    // TODO: update text labels
    }

    function hide(el: any) {
        el.style.display = 'none';
    }

    function show(el: any) {
        el.style.display = '';
    }

    const form = document.getElementById('form');
    const editButton = document.getElementById('editButton');
    const firstNameInput = document.getElementById('firstNameInput');
    const firstNameText = document.getElementById('firstNameText');
    const lastNameInput = document.getElementById('lastNameInput');
    const lastNameText = document.getElementById('lastNameText');
    const helloText = document.getElementById('helloText');

    form?.addEventListener('submit', handleFormSubmit);
    firstNameInput?.addEventListener('input', handleFirstNameChange);
    lastNameInput?.addEventListener('input', handleLastNameChange);

}
