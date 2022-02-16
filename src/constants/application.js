export const TypeWriterTextList=["Product Management"]
export class AccountStatus{
    static active=0;
    static deleted=1;
    static disabled=2;
}

export const NameRegEx={
    length:"(?=.{1,50})"
}
export const ContactRegEx={
    length:"(?=.{10,10})"
}
export const PasswordRegEx={
    digit:"(?=.*[0-9])",
    lowercaseLetter:"(?=.*[a-z])",
    uppercaseLetter:"(?=.*[A-Z])",
    specialCharacter:"(?=.*[!@#\\$%\\^&\\*])",
    length:"(?=.{8,15})"
}

export const EmailRegEx={
    email:"^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
}

export const UsernameRegEx={
    length:"(?=.{8,15})"
}