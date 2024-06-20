interface CreateAdvertisementFormProps {
  currentStep: number
}

export default function CreateAdvertisementForm({
  currentStep,
}: CreateAdvertisementFormProps) {
  return (
    <div>
      <div>Form</div>
      <div>Current step: {currentStep}</div>
    </div>
  )
}
